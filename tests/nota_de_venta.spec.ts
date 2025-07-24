import { test, expect } from '@playwright/test';

// Test: Crear Nota de Venta con cliente y producto existentes en relBase
test('Crear Nota de Venta con cliente y producto existentes', async ({ page }) => {
  // 1. Login
  await page.goto('https://demo.relbase.cl/ingresar');
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill('qa_junior@relke.cl');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Demo123456!');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  // 2. Ir al módulo Ventas y crear nueva nota de venta
  await page.getByRole('link', { name: ' Ventas' }).click();
  await page.locator('.shadow > .box > .box-btn > .table-actions-toolbar > .btn-group > a').first().click();

  // 3. Seleccionar sucursal y tipo de documento
  await page.getByTitle('Casa matriz').click();
  await page.getByRole('treeitem', { name: 'Casa matriz' }).click();
  await page.locator('#select2-sales_note_type_document_sii-container').click();
  await page.getByRole('treeitem', { name: 'FACTURA ELECTRÓNICA' }).click();

  // 4. Seleccionar bodega
  await page.locator('#select2-sales_note_ware_house_id-container').click();
  await page.getByRole('treeitem', { name: 'Bodega principal' }).click();

  // 5. Seleccionar cliente existente (dejar búsqueda vacía y esperar opciones)
  await page.locator('#select2-sales_note_customer_id-container').click();
  await page.locator('input[type="search"]').fill(''); // limpiar búsqueda
  await page.waitForSelector('.select2-results__option', { state: 'visible', timeout: 5000 });
  // Opcional: imprime las opciones para debug
  const opcionesCliente = await page.locator('.select2-results__option').allTextContents();
  console.log('Opciones cliente:', opcionesCliente);
  // Selecciona la primera opción disponible
  await page.locator('.select2-results__option').first().click();

  // 6. Seleccionar canal de venta
  await page.locator('div:nth-child(10) > .col-md-8 > .select2 > .selection > .select2-selection > .select2-selection__arrow').click();
  await page.getByRole('treeitem', { name: 'E-Commerce' }).click();

  // 7. Completar contacto y plazo de entrega
  await page.locator('#sales_note_contact').fill('123456789');
  await page.locator('#sales_note_delivery_time').click();

  // 8. Seleccionar producto existente (buscando por nombre)
  await page.locator('#select2-sales_note_e_document_products_attributes_0_product_id-container').click();
  await page.locator('input[type="search"]').fill('teclado');
  await page.waitForSelector('.select2-results__option', { state: 'visible', timeout: 5000 });
  await page.getByRole('treeitem', { name: '[920-009845] Teclado Ergonó' }).click();

  // 9. Completar cantidad y descripción
  await page.locator('#sales_note_e_document_products_attributes_0_description').click();
  await page.locator('#sales_note_e_document_products_attributes_0_quantity').fill('1');

  // 10. Enviar la nota de venta
  // Si aparece un diálogo, lo cierra automáticamente
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#new_edocument_form div').filter({ hasText: 'Producto * Descripción' }).nth(1).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Enviar' }).click();

  // 11. Validación opcional
  // await expect(page.getByText('Nota de venta enviada')).toBeVisible();
});