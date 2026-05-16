/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Paragraph {
  id: string;
  content: string;
  categories: string[];
}

export const PARAGRAPHS: Paragraph[] = [
  {
    id: "1",
    categories: ["Logbook"],
    content: "As per the log book, the applicant performed surgeries till 11/09/2025."
  },
  {
    id: "2",
    categories: ["HL/GS"],
    content: "The document submitted is a membership/association/certification as the profession is not regulated."
  },
  {
    id: "3",
    categories: ["Employment"],
    content: "Authorized Contact stated that the Applicant was not permitted to work with another organization at the same time."
  },
  {
    id: "4",
    categories: ["Employment"],
    content: "Authorized Contact stated that the Applicant was permitted to work with another organization at the same time."
  },
  {
    id: "5",
    categories: ["Employment"],
    content: "At the time of verification 23 November 2022, the Applicant was still working with the facility."
  },
  {
    id: "6",
    categories: ["Email"],
    content: "We have CONFIRMED that the email address used for verification is an authorized email address according to the Issuing Authority."
  },
  {
    id: "7",
    categories: ["Employment"],
    content: "The employment tenure with gap reflecting on the Applicant’s employment document has been verified as correct."
  },
  {
    id: "8",
    categories: ["BRC"],
    content: "At the time of verification, 12 JANUARY 2022, the Applicant's business registration certificate was still active."
  },
  {
    id: "9",
    categories: ["Education"],
    content: "The Mode of Study has been verified as exam based hence, duration of program is not applicable."
  },
  {
    id: "10",
    categories: ["Education", "COVID-19"],
    content: "Authorised contact confirmed that the mode of study is full time, however, during Covid 19 Pandemic, the mode of study was Blended / Online learning."
  },
  {
    id: "11",
    categories: ["GS"],
    content: "The applicant is in good standing as of [enter date DD MMMM YYYY]."
  },
  {
    id: "12",
    categories: ["Employment"],
    content: "The Applicant commenced employment prior to acquiring the necessary health licence."
  },
  {
    id: "13",
    categories: ["Report"],
    content: "Report Update Reason: Status Conversion (Unable to Verify to Positive). The case was last updated under case number."
  },
  {
    id: "14",
    categories: ["HL/GS"],
    content: "The document submitted is a membership/association/certification/registration; however, it is not a license to practice, as the issuing authority is not a regulatory body for this profession."
  },
  {
    id: "15",
    categories: ["Employment", "BRC"],
    content: "Verification of the specialization was requested, however, it was not disclosed by the Issuing Authority due to [enter reason why IA cannot disclose specialization]."
  },
  {
    id: "16",
    categories: ["Logbook"],
    content: "Issuing Authority has provided logbook surgeries till DD MM YYY."
  },
  {
    id: "17",
    categories: ["HL/GS"],
    content: "The applicant has not been subject to any legal, administrative action, or disciplinary penalty during the period he performed his profession at the Ministry of Health or affiliated hospitals."
  },
  {
    id: "18",
    categories: ["Employment", "Education", "HL/GS", "BRC"],
    content: "Verified - Verification obtained through Digi-flow.net Verification System, the official verification platform of DataFlow Group."
  },
  {
    id: "19",
    categories: ["Appeal"],
    content: `Contact details were identified for <IA name> upon detailed research: <email>.
    
Email sent requesting the verification of the Applicant's <check type for example employent> document to <email>.
  
A reply was received from an Official at email id: <email>, stating that the document submitted by the Applicant is genuine.`
  },
  {
    id: "20",
    categories: ["Appeal"],
    content: "A Site Visit was conducted at <IA name>, where, <Assistant Controller of Examination (Name not disclosed)> stated that the document submitted by the applicant is genuine"
  },
  {
    id: "21",
    categories: ["Rajiv Gandhi"],
    content: `Based on our review, we have found no evidence of duplicity.

To Authenticate the Mode of Study, we requested a complete copy of the applicant's passport (all pages), The submitted document confirms there were no travel records during that Period.

Furthermore, the applicant has formally confirmed to Dataflow that no employment was undertaken while pursuing the Bachelor of Science in Nursing (Post Basic) program.`
  },
  {
    id: "22",
    categories: ["HL/GS", "Education", "Employment", "GS"],
    content: "Information verified through the digital facility the License attained is a sub-Specialist in Adult kidney disease (adult nephrology)."
  },
  {
    id: "23",
    categories: ["Education", "Employment"],
    content: "On being probed regarding the overlap between the employment and education component, however, there was no response from the issuing Authority despite multiple attempts."
  },
  {id:'24',
  categories:["Appeal"],
  content: `Contact details were identified for Khyber Medical University upon detailed research: verification@kmu.edu.pk.

A verification request for the applicant's education document was sent through the Digi-flow Verification System, which is the official digitized platform for Khyber Medical University.
  
A reply was received from Jamil Ur Rahman, Controller of Examinations at Khyber Medical University who confirmed that the document submitted by the Applicant is genuine.`
},

{id:'25',
  categories:["Appeal"],
  content: `Verification received through post, where Assistant Director (M) (Name not disclosed), Department of Examinations Conduct at National Board of Examinations in Medical Sciences has verified the details.`
}
,
{id:'26',
  categories:["HL/GS"],
  content: `The applicant's license status reflecting as 'Full Registration in APS without license to practise,' allows them to work under supervision without a licence to practise. For this purpose the applicant paid an annual retention fee with a defined validity date.
  
<<GMC>>`
},
{id:'27',
  categories:["Appeal"],
  content: `Maharashtra Nursing Council directly post the verification to the client.

Verification obtained from I/C Registrar (Name not Disclosed) at Maharashtra Nursing Council.`
},
{id:'28',
  categories:["Appeal"],
  content: `Verification has been obtained from client.

Verification obtained from Judith Araba Christian (FGCNM Deputy Director (Operations) For Registrar at Nursing And Midwifery Council Of Ghana.`
}


];
