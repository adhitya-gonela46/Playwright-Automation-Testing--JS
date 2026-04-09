import { test, expect } from '@playwright/test';
const productIds = [1, 2, 3, 4, 5];

test.describe('data driven api testing', () => {

  for (const id of productIds) {

    test(`Validate product API for ID: ${id}`, async ({ request }) => {

      //sends request for every element
      const response = await request.get(`https://dummyjson.com/products/${id}`);

      // status checking
      expect(response.status()).toBe(200);

      // json object
      const body = await response.json();

      // validating my responses
      expect(body.id).toBe(id);
      expect(body).toHaveProperty('title');
      expect(body).toHaveProperty('price');

      // 5. Validate data types
      expect(typeof body.title).toBe('string');
      expect(typeof body.price).toBe('number');

      console.log(`Validated product ID: ${id}`);
    });

  }

});