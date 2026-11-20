import {useEffect,useState,useCallback} from 'react';import {get} from './api';
export default function useData(key){const [s,set]=useState({loading:true,error:null,data:null});
 const run=useCallback(()=>{set({loading:true,error:null,data:null});get(key).then(data=>set({loading:false,error:null,data})).catch(error=>set({loading:false,error,data:null}))},[key]);
 useEffect(run,[run]);return {...s,retry:run};}
