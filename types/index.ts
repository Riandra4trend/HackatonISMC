export interface fleetProps {
  id: string;
  push: string;
  pop: string;
}

export interface grafikDashProps {
  week: string;
  production: string;
}

export interface Hauler {
  id: number;
  assign?: string;
  distance?: number;
  operator?: string;
  isReady: boolean;
  fleet?: Fleet;
  idFleet?: number;
}

export interface Prodty {
  id: number;
  prodty: number;
  fleet?: Fleet;
  fleetId?: number;
  longTime: number;
  Date: string; // Gunakan tipe tanggal yang sesuai
}

export interface Fleet {
  id: number;
  name: string;
  prodtyLoader?: number;
  rate?: number;
  haulers: Hauler[];
  prodtys: Prodty[];
  FleetProblems: FleetProblem[];
  emisiKarbon: EmissiKarbon[];
  matchVectors: MatchVector[];
}

export interface MatchVector {
  id: number;
  fleetId?: number;
  fleet?: Fleet;
  MF: number;
  createdAt: string; // Gunakan tipe tanggal yang sesuai
}

export interface EmissiKarbon {
  id: number;
  fleetId?: number;
  fleet?: Fleet;
  emisi: number;
  createdAt: string; // Gunakan tipe tanggal yang sesuai
}

export interface FleetProblem {
  id: number;
  name: string;
  fleetId?: number;
  fleet?: Fleet;
  longTime: number;
  detail: string;
  createdAt: string; // Gunakan tipe tanggal yang sesuai
}