import { IsBoolean, IsNotEmpty } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    @IsBoolean()
    isDone: boolean;
}
