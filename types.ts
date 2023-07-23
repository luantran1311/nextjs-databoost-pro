export interface CategoryTree {
    id: number;
    name: string;
    items: CategoryTree[] | null;
}