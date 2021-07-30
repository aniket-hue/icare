import { MessageDisplay } from '../../components/common/index';
import { ProductShowcaseGrid } from '../../components/product/index';
import {
  useDocumentTitle,
  useRecommendedProducts,
  useScrollTop,
} from '../../hooks/index';
import bannerImg from '../../images/banner-girl-1.png';
import React from 'react';

const RecommendedProducts = () => {
  useDocumentTitle('Recommended Products | SpecShop');
  useScrollTop();

  const { recommendedProducts, fetchRecommendedProducts, isLoading, error } =
    useRecommendedProducts();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>Recommended Products</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={recommendedProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecommendedProducts;
