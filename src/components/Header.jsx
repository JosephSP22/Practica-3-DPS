import React from "react";

export const Header = ({ 
    allProducts, 
    setAllProducts, 
    total, 
    setTotal, 
    countProducts, 
    setCountProducts 
}) => {

    const [active, setActive] = React.useState(false);

    const onDeleteProduct = (product) => {
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onClearCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1>Book Store</h1>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    <img 
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik03IDIycS0uODI1IDAtMS40MTItLjU4N1Q1IDIwdC41ODgtMS40MTJUNyAxOHQxLjQxMy41ODhUOSAyMHQtLjU4NyAxLjQxM1Q3IDIybTEwIDBxLS44MjUgMC0xLjQxMi0uNTg3VDE1IDIwdC41ODgtMS40MTJUMTcgMTh0MS40MTMuNTg4VDE5IDIwdC0uNTg3IDEuNDEzVDE3IDIyTTUuMiA0aDE0Ljc1cS41NzUgMCAuODc1LjUxM3QuMDI1IDEuMDM3bC0zLjU1IDYuNHEtLjI3NS41LS43MzcuNzc1VDE1LjU1IDEzSDguMUw3IDE1aDEydjJIN3EtMS4xMjUgMC0xLjctLjk4N3QtLjA1LTEuOTYzTDYuNiAxMS42TDMgNEgxVjJoMy4yNXoiLz48L3N2Zz4=" 
                        alt="carrito" 
                        className="icon-cart" 
                    />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>

                <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
                    {allProducts.length ? (
                        <>
                        <div className="row-product">
                            {allProducts.map((product => (
                                <div className="cart-product" key={product.id}>
                                    <div className="info-cart-product">
                                        <span className="cantidad-producto-carrito">{product.quantity}</span>
                                        <p className="titulo-producto-carrito">{product.title}</p>
                                        <span className="precio-producto-carrito">${product.price}</span>
                                    </div>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik02LjQgMTlMNSAxNy42bDUuNi01LjZMNSA2LjRMNi40IDVsNS42IDUuNkwxNy42IDVMMTkgNi40TDEzLjQgMTJsNS42IDUuNmwtMS40IDEuNGwtNS42LTUuNnoiLz48L3N2Zz4=" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}/>
                                </div>
                            )))}
                        </div>
                            {/* {allProducts.map((product, index) => (
                                <div className="row-product" key={index}>
                                    <div className="cart-product">
                                        <div className="info-cart-product">
                                            <span className="cantidad-producto-carrito">{product.quantity}</span>
                                            <p className="titulo-producto-carrito">{product.name}</p>
                                            <span className="precio-producto-carrito">${product.price}</span>
                                        </div>
                                        <button onClick={() => onDeleteProduct(product)}>Eliminar</button>
                                    </div>
                                </div>
                            ))} */}
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">${total}</span>
                            </div>

                            <button className="btn-clear-all" onClick={onClearCart}>Vaciar carrito</button>
                        </>
                    ) : (
                        <p className="cart-empty">El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
