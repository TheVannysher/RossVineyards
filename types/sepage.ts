import { Frequency, Periode } from "./shared";

export interface Sepage {
    id: string,
    name: string,
    notes: string,
    harvestPeriode?: Periode
    maintenanceFrequency: Frequency
}