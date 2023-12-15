import { Controller, Get, Header, HostParam, HttpCode, Redirect, Res } from '@nestjs/common';
import { GenericResponse } from 'src/models/Generic';
import { Items } from 'src/models/Item';

@Controller({path: 'product-items'})
export class ProductItemsController {

    @Get('/products')
    @HttpCode(200)
    async getAllProducts(@HostParam('local') local: string): Promise<GenericResponse<Items[]>> {
        const items: Items[] = [
            {
                id: 1000,
                name: 'piatos',
                price: 12,
                quantity: 5
            },
            {
                id: 1001,
                name: 'fita',
                price: 5,
                quantity: 2
            },
            {
                id: 1002,
                name: 'cream-o',
                price: 7,
                quantity: 3
            },
        ];
        
        return {
            code: 200,
            status: 1,
            message: 'All Product Items.',
            data: items,
        }
    }
}
