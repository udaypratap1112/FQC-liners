/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Kb {
    id: string;
    content: string;
    categories: string[];
  }
  
  export const KBS: Kb[] = [
    {
      id: "1",
      categories: ["Education"],
      content: `### Mode of Study (MOS) - Covid / Pandemic / Blendend Learning

---  

###


- **If the Mode of Study (MOS) is not *Full Time / In Campus / Face to Face*, we must seek clarification by asking the following questions:**
      
  1. Was the mode of study blended learning due to the Pandemic? **[YES/NO]**
  2. For confirmation, the mode of study of the university is face-to-face from the beginning and offered online due to the pandemic. **[YES/NO]**
      
#    
  
* **RHS Update:** Capture MOS as **Full time** in RHS if all answers are **YES** to all questions.


> *The applicant’s qualifications were attained during the COVID pandemic, combining regular and online classes.*`
        },

        {
          id: "2", // Adjust your ID sequence accordingly
          categories: ["Health License"],
          content: `### General Medical Council (GMC UK) - (APS) without a licence to practise

---          
      
### Information:
      
1. Full registration under APS (approved practice settings) indicates that the medical graduate is currently working only under supervision (in NHS or private establishments) as part of their foundation years.

2. The phrase 'without a license to practice' indicates that the medical graduate cannot practice independently.

3. Such licenses require an annual retention fee to be paid by the medical graduate (UK and foreign graduates).
      
---
      
### Instructions:
      
1. **Validity date** will be captured based on the **"Annual Retention Fee date"** (e.g., *Annual retention fee due date: 29/09/2026*).
      
2. **Recommended report remarks** in the client report:
         
 > *The applicant's license status reflecting as 'Full Registration in APS without license to practise,' allows them to work under supervision without a licence to practise. For this purpose the applicant paid an annual retention fee with a defined validity date.*`
        },
        
        {
          id: "3", // Adjust your ID sequence accordingly
          categories: ["Health License"],
          content: `### Royal College Of General Practitioners (300433) - Verification Process

---          
      
### Information:
      
1. Royal College Of General Practitioners confirmed that they do not have access to mode of study, duration of program, and period of study in membership documents.

2. The checks that go through the Digiflow (STP) process will be disabled.

3. The Issuing Authority only confirms that the certificate provided is true and accurate according to their records.
      
---
      
### Instructions:
      
1. Verification must **not** request any additional information (such as duration of program and period of study) from the Royal College Of General Practitioners (RCGP).

2. **Veriflow fields** for duration of program and period of study should auto-capture as **NOT DISCLOSED**.

3. **Important:** No rejections are to be made to request attempts or clarification regarding the duration of program and period of study information.`
        }
  ];