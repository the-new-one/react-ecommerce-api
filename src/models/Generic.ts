export interface GenericResponse<T> {
    code: number;
    status: number;
    message: string;
    data: T
}