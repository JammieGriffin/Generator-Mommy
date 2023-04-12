import type { Router } from "express";
export interface SQLError {
  message: string;
  site:string;
  code:number;
}

export interface RouteConf {
  path: string;
  routers:Router[];
}