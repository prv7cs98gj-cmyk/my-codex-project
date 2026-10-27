import {test} from 'node:test';
import assert from 'node:assert/strict';
import {gpa,gradePoint,courses,weekSwipes,initialData} from '../src/lib/planner';
test('GPA uses credit weights and handles no classes',()=>{assert.equal(gpa([]),0);assert.equal(gpa([{...courses[0],grade:95,credits:3},{...courses[1],grade:85,credits:1}]),3.75);});
test('grade boundaries include failing courses',()=>{assert.equal(gradePoint(93),4);assert.equal(gradePoint(92),3.7);assert.equal(gradePoint(59),0);});
test('meal allowance resets Monday and excludes future weeks',()=>{const now=new Date(2026,9,28,12);const swipes=[new Date(2026,9,25,12),new Date(2026,9,26,0),new Date(2026,10,1,23),new Date(2026,10,2,0)].map((date,i)=>({id:String(i),date:date.toISOString(),place:'Hall'}));assert.deepEqual(weekSwipes(swipes,now).map(s=>s.id),['1','2']);});
test('sample assignments reference valid classes and have unique IDs',()=>{const d=initialData();assert.equal(new Set(d.assignments.map(a=>a.id)).size,d.assignments.length);assert.ok(d.assignments.every(a=>d.classes.some(c=>c.code===a.course)));});
