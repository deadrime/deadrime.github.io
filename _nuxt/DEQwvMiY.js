import{u as a,q as r}from"./D7vSz1kn.js";const o=async t=>{const{data:s}=await a(`post_${t}`,()=>r("articles").where("path","=",t).first());return s};export{o as u};
