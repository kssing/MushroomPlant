import {Stage}from './stage.model';
import {Room} from './room.model'
export interface ProductionDashboard {
    room: Room,
    id: number,
    batchName: string, 
    quantity: number, 
    expectedStage: Stage, 
    actualStage: Stage
}
