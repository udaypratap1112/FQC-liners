import React from 'react';
import ReactMarkdown from 'react-markdown'; // Ensure you have installed 'react-markdown'

// 1. Store the markdown content in a JavaScript string variable
const dhpUpdateMarkdown = `# POLICY UPDATE: Verifications Protocol for Blended Learning (Pandemic Scenario)

**To:** Verifications Team, FQC/FR Team  
**From:** Knowledge Management  
**Date:** July 17, 2026  
**Subject:** Updated Verification Guidelines for Blended Learning Mode of Study (MOS)  
**Target Client:** Department of Healthcare Professions (DHP)  

---

### **Effective Immediately (Active Checks Onwards)**

When the verified **Mode of Study (MOS)** is identified as **Blended Learning**, the following operating procedures must be strictly adhered to:

---

## 1. Verifications Team Workflow

If the Mode of Study (MOS) is **not** explicitly listed as *Full Time*, *In Campus*, or *Face to Face*, the Verifications Team must initiate a clarification request with the following two standard questions:

1. **Was the mode of study blended learning due to the Pandemic?** \`[YES/NO]\`
2. **For confirmation, the mode of study of the university is face-to-face from the beginning and offered online due to the pandemic.** \`[YES/NO]\`

### **RHS Capture & Classification Policy**
* **Condition:** If the answers to **both** questions are **YES**.
* **Action:** Capture the Mode of Study (MOS) as **Full time** in the Right-Hand Side (RHS) of the system portal.
* **Required Client Report Liner:** You must append the following recommended liner to the client report remarks:
  > *"The applicant’s qualifications were attained during the COVID pandemic, combining regular and online classes."*

---

## 2. Quality Control (FQC / FR Team) Workflow

The Final Quality Control (FQC) / Final Review (FR) team is responsible for ensuring compliance with this update:
* **Proactive Addition:** If the required client report liner is missing from the remarks section, the reviewer/performer must **proactively add** the liner before final report release.

---

### **Additional Resources**
For more detailed guidelines and client-specific context, please log in to **NotebookLM**: *Department of Healthcare Professions (DHP)*.`;

// 2. Render it inside your React component
export default function renderKB() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <ReactMarkdown>{dhpUpdateMarkdown}</ReactMarkdown>
    </div>
  );
}