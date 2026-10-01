import { useCallback, useEffect, useState } from 'react'
const KEY='gdt-engineer-projects-v1'
export function readProjects(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return []}}
export function useProjects(){
 const [projects,setProjects]=useState(readProjects)
 useEffect(()=>localStorage.setItem(KEY,JSON.stringify(projects)),[projects])
 const save=useCallback((project)=>{const item={...project,id:project.id||crypto.randomUUID(),updatedAt:new Date().toISOString()};setProjects(p=>[item,...p.filter(x=>x.id!==item.id)]);return item},[])
 const remove=useCallback(id=>setProjects(p=>p.filter(x=>x.id!==id)),[])
 return {projects,save,remove}
}
