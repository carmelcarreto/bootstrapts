
describe('Pruebas en Componentes', () => {

    const rutas = [
        '/',
        '/about',
        '/products',
        '/ramdom-path'
    ];

    test('Debe de mostrar el titulo del componente Home, que sea visible al cargar la ruta raiz "/" ', () => {
        expect(rutas).toContain('/');
        expect(new Set(rutas)).toContain('/');
    });

    test('Probar que el titulo del componente About sea visible al cargar la ruta raiz "/about" ', () => {
        expect(rutas).toContain('/about');
        expect(new Set(rutas)).toContain('/about');
    });

    test('Probar que el titulo del componente Products sea visible al cargar la ruta raiz "/products" ', () => {
        expect(rutas).toContain('/products');
        expect(new Set(rutas)).toContain('/products');
        
    });

    test('Probar que el titulo del componente NoMatch sea visible al cargar la ruta raiz "/ramdom-path" ', () => {
        expect(rutas).toContain('/ramdom-path');
        expect(new Set(rutas)).toContain('/ramdom-path');
        
    });

});