/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useCallback } from 'react';
import { Search, Copy, Check, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PARAGRAPHS } from './constants';

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
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.content.toLowerCase().includes(query) || 
        p.categories.some(c => c.toLowerCase().includes(query))
      );
    }
    if (selectedCategories.length > 0) {
      result = result.filter(p => 
        selectedCategories.every(sc => p.categories.includes(sc))
      );
    }
    return result;
  }, [searchQuery, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? [] : [category]
    );
  };

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 text-slate-900 overflow-hidden">
      {/* Concise Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 shrink-0 shadow-sm z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block shrink-0">
            <h1 className="text-lg font-bold text-slate-800 leading-none">QC Liners</h1>
            <p className="text-[10px] text-slate-400 font-medium">By Uday Pratap</p>
          </div>
          
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search snippets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 bg-slate-100 border-transparent rounded-md text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
             {filteredParagraphs.length} Results
          </div>
        </div>

        {/* Sub-header Categories (Compact) */}
        <div className="max-w-6xl mx-auto flex items-center gap-2 mt-2 overflow-x-auto no-scrollbar pb-1">
          <Filter size={12} className="text-slate-400 shrink-0" />
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all border ${
                selectedCategories.includes(cat)
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50">
        <div className="max-w-4xl mx-auto grid gap-3">
          <AnimatePresence mode="popLayout">
            {filteredParagraphs.length > 0 ? (
              filteredParagraphs.map((para) => (
                <motion.div
                  key={para.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => handleCopy(para.content, para.id)}
                  className="group relative bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {para.categories.map(cat => (
                      <span key={cat} className="text-[9px] font-bold uppercase tracking-tighter text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base leading-relaxed text-slate-700 pr-8">
                    {para.content}
                  </p>

                  <div className={`absolute top-4 right-4 transition-opacity ${copiedId === para.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {copiedId === para.id ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                        <Check size={12} /> COPIED
                      </span>
                    ) : (
                      <div className="p-1.5 bg-slate-100 rounded text-slate-400">
                        <Copy size={14} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-400 text-sm">No matches found.</p>
                <button onClick={() => {setSearchQuery(''); setSelectedCategories([]);}} className="text-blue-500 text-xs mt-2 underline">Reset filters</button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
