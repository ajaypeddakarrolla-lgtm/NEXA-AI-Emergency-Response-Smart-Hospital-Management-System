import {create} from 'zustand';
export const useStore=create(set=>({user:{name:'Priya Menon',role:'admin'},notifications:[
 {id:1,t:'Emergency request received',s:'Rahul Verma · Chest pain',time:'2m ago'},{id:2,t:'Ambulance assigned',s:'AMB-102 is on the way',time:'3m ago'},{id:3,t:'Hospital accepted patient',s:'City Heart Institute',time:'5m ago'},{id:4,t:'ICU bed updated',s:'Metro General: 2 available',time:'12m ago'},{id:5,t:'AI recommendation generated',s:'92% match · City Heart Institute',time:'14m ago'}],
 driverStatus:'Available',setDriverStatus:s=>set({driverStatus:s})}));
