
export interface SortDescriptor {
    field: string;
    dir?: 'asc' | 'desc';
}

export type OrderByType = <T>(data: T[], descriptors: SortDescriptor[]) => T[];
