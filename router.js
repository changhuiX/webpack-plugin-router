import {
    asyncRoutes
} from "@/router/asyncRoutes";
import {getAuthorityJson} from "@util/router/AccessJson";
import path from "path";
import fs from "fs"

// 转化本地JSON
let authorityJson =  getAuthorityJson(asyncRoutes)


fs.writeFileSync(path.resolve(__dirname,'../../init.json'),authorityJson,'utf-8')

console.log(authorityJson)
