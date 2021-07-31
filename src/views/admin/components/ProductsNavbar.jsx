import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { SearchBar } from '../../../components/common/index';
import { ADD_PRODUCT } from '../../../constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductsNavbar = (props) => {
  const { productsCount, totalProductsCount } = props;
  const history = useHistory();

  return (
    <div className="product-admin-header">
      <h3 className="product-admin-header-title">
        Products &nbsp; ({`${productsCount} / ${totalProductsCount}`})
      </h3>
      <div style={{ display: 'flex', gap: 10 }}>
        <SearchBar />
        <button
          className="button button-small"
          onClick={() => history.push(ADD_PRODUCT)}
          type="button"
        >
          <PlusOutlined />
          &nbsp; Add New Product
        </button>
      </div>
    </div>
  );
};

ProductsNavbar.propTypes = {
  productsCount: PropType.number.isRequired,
  totalProductsCount: PropType.number.isRequired,
};

export default ProductsNavbar;
