/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useCallback } from 'react';
import { Search, Copy, Check, X, BookOpen, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PARAGRAPHS, Paragraph } from './constants';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    PARAGRAPHS.forEach(p => p.categories.forEach(c => cats.add(c)));
    return Array.from(cats).sort();
  }, []);

  const filteredParagraphs = useMemo(() => {
    let result = PARAGRAPHS;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.content.toLowerCase().includes(query) || 
        p.categories.some(c => c.toLowerCase().includes(query))
      );
    }

    // Filter by selected categories (AND logic: must contain ALL selected)
    if (selectedCategories.length > 0) {
      result = result.filter(p => 
        selectedCategories.every(sc => p.categories.includes(sc))
      );
    }

    return result;
  }, [searchQuery, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories([category]);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
  };

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sleek Header */}
      <header className="bg-white border-b border-slate-200 py-6 px-10 shadow-sm shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">QC Liners</h1>
            <p className="text-sm text-slate-500 font-medium">Developed by Uday Pratap</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-1/2 justify-end">
            <div className="relative w-full max-w-sm">
              <input 
                type="text" 
                placeholder="Search within paragraphs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {(searchQuery || selectedCategories.length > 0) && (
              <button 
                onClick={clearAllFilters}
                className="px-4 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Categories Bar */}
      <div className="bg-white border-b border-slate-100 py-3 px-10 overflow-x-auto shrink-0 flex items-center gap-3 no-scrollbar">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-2 flex items-center gap-1">
          <BookOpen size={12} /> Filter:
        </div>
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategories.includes(cat)
                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200 ring-2 ring-blue-100'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          <AnimatePresence mode="popLayout">
            {filteredParagraphs.length > 0 ? (
              filteredParagraphs.map((para) => (
                <motion.div
                  key={para.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-start justify-between gap-6 hover:border-blue-100 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {para.categories.map(cat => (
                        <span 
                          key={cat}
                          className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded transition-colors ${
                            selectedCategories.includes(cat)
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50'
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-wrap">
                      {para.content}
                    </p>
                  </div>
                  
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(para.content, para.id)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                      copiedId === para.id 
                      ? 'bg-green-600 text-white' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {copiedId === para.id ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedId === para.id ? 'COPIED' : 'COPY'}
                  </motion.button>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <Search size={40} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500 font-medium">No results matching your archive search.</p>
                <button 
                  onClick={clearAllFilters}
                  className="mt-4 text-blue-600 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </AnimatePresence>

          {/* Footer Stats */}
          <div className="text-slate-400 text-xs font-medium mt-4 pb-4">
            Displaying {filteredParagraphs.length} of {PARAGRAPHS.length} snippets
          </div>
        </div>
      </main>
    </div>
  );
}
