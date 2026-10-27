export type Assignment = { id: string; title: string; course: string; due: string; priority: 'High'|'Medium'|'Low'; done: boolean };
export type ClassItem = { id: string; name: string; code: string; days: number[]; start: string; end: string; room: string; color: string; credits: number; grade: number };
export type Planner = { assignments: Assignment[]; classes: ClassItem[]; swipes: {id:string; date:string; place:string}[]; mealBudget: number };
export const today = () => new Date().toLocaleDateString('en-CA');
export function dateAfter(n:number) { const d=new Date(); d.setDate(d.getDate()+n); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export const courses: ClassItem[] = [
{id:'1',name:'Introduction to Psychology',code:'PSY 101',days:[1,3,5],start:'09:00',end:'09:50',room:'Harper Hall · 204',color:'purple',credits:3,grade:94},
{id:'2',name:'Visual Communication',code:'DES 210',days:[2,4],start:'11:00',end:'12:15',room:'Design Studio · 108',color:'orange',credits:4,grade:89},
{id:'3',name:'Statistics & Probability',code:'MAT 202',days:[1,3,5],start:'13:00',end:'13:50',room:'Science Center · 302',color:'blue',credits:3,grade:91},
{id:'4',name:'Modern Literature',code:'ENG 205',days:[2,4],start:'14:00',end:'15:15',room:'Bennett Hall · 116',color:'green',credits:3,grade:96}];
export function initialData(): Planner { return { classes:courses,assignments:[
{id:'1',title:'Cognitive psychology reflection',course:'PSY 101',due:dateAfter(0),priority:'High',done:false},
{id:'2',title:'Typography exploration',course:'DES 210',due:dateAfter(1),priority:'Medium',done:false},
{id:'3',title:'Problem set 04',course:'MAT 202',due:dateAfter(2),priority:'High',done:false},
{id:'4',title:'Reading response: The Bell Jar',course:'ENG 205',due:dateAfter(3),priority:'Low',done:false},
{id:'5',title:'Research methods quiz',course:'PSY 101',due:dateAfter(-1),priority:'Medium',done:true}],swipes:[],mealBudget:14}; }
export function gradePoint(grade:number) { return grade>=93?4:grade>=90?3.7:grade>=87?3.3:grade>=83?3:grade>=80?2.7:grade>=77?2.3:grade>=73?2:grade>=70?1.7:grade>=60?1:0; }
export function gpa(classes:ClassItem[]) { const credits=classes.reduce((s,c)=>s+c.credits,0); return credits?classes.reduce((s,c)=>s+gradePoint(c.grade)*c.credits,0)/credits:0; }
export function weekSwipes(swipes:Planner['swipes'],now=new Date()) { const start=new Date(now.getFullYear(),now.getMonth(),now.getDate()); start.setDate(start.getDate()-((start.getDay()+6)%7)); const end=new Date(start);end.setDate(end.getDate()+7); return swipes.filter(s=>new Date(s.date)>=start&&new Date(s.date)<end); }
