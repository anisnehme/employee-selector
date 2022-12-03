import path from 'path'
import {promises as fs} from 'fs'


export async function getEmployees(){
    const filePath = path.join(process.cwd(), '/mock/employees.json')
    return JSON.parse(await fs.readFile(filePath,'utf-8'))
}