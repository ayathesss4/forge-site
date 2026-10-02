import {IMG} from './images.js';
// Set `src` on any item to a real photo URL/import; empty src renders the art-directed placeholder.
export const nav=[['About','about'],['Programs','programs'],['Trainers','trainers'],['Facilities','facilities'],['Membership','membership']];
export const experience=[
{t:'Train',d:'A calm, uncrowded floor with elite equipment and coaching that adapts to you.',src:IMG[1]},
{t:'Recover',d:'Heat, cold and hands-on therapy built into every visit, not added on.',src:IMG[2]},
{t:'Perform',d:'Assessment-led programming to measure progress and raise your ceiling.',src:IMG[3]},
{t:'Reset',d:'A members lounge and quiet spaces to step out of the day and back in.',src:IMG[6]}];
export const programs=[
{t:'Personal Training',d:'One-to-one coaching built around your goals.',src:IMG[4]},
{t:'Strength & Conditioning',d:'Progressive barbell and resistance work.',src:IMG[3]},
{t:'Functional Training',d:'Movement quality, control and resilience.',src:IMG[6]},
{t:'Boxing',d:'Technical striking and conditioning with expert coaches.',src:IMG[1]},
{t:'Pilates',d:'Precision, mobility and core strength in private studios.',src:IMG[5]},
{t:'Performance Training',d:'Speed, power and testing for serious athletes.',src:IMG[3]}];
export const trainers=[
{n:'Alex Morgan',r:'Strength & Conditioning',src:''},
{n:'Sarah Williams',r:"Performance & Women's Training",src:''},
{n:'Daniel Reed',r:'Boxing & Conditioning',src:''},
{n:'Maya Collins',r:'Pilates & Mobility',src:''}];
export const facilities=[
{t:'The Training Floor',d:'Open, architectural, and never crowded.',src:IMG[6],c:'md:col-span-7 md:row-span-2'},
{t:'Private Studios',d:'Reserved spaces for one-to-one and small-group work.',src:IMG[4],c:'md:col-span-5'},
{t:'Performance Zone',d:'Turf, sleds and testing equipment.',src:IMG[3],c:'md:col-span-5'},
{t:'Recovery Suite',d:'Sauna, ice bath and treatment rooms.',src:IMG[2],c:'md:col-span-4'},
{t:'Locker Rooms',d:'Considered materials, generous space.',src:IMG[7],c:'md:col-span-4'},
{t:'Members Lounge',d:'A quiet place to meet, work and reset.',src:IMG[5],c:'md:col-span-4'}];
export const recovery=['Sauna','Ice Bath','Recovery','Sports Massage','Mobility','Wellness'];
export const tiers=[
{t:'Essential',d:'Full access to the training floor and locker rooms.'},
{t:'Performance',d:'Adds coaching, programming and the recovery suite.'},
{t:'Private',d:'Personal coaching, priority booking and private studio access.'}];
export const footerLinks=[['About','about'],['Trainers','trainers'],['Programs','programs'],['Facilities','facilities'],['Membership','membership'],['Contact','contact']];
