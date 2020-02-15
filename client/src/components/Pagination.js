import React, { useState } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiPagination } from '@elastic/eui';

const Pagination = () => {
  const [activePage, setActivePage] = useState(0);

  const changePage = page => {
    setActivePage(page);
  };

  return (
    <EuiFlexGroup justifyContent="spaceAround">
      <EuiFlexItem grow={false}>
        <EuiPagination pageCount={3} activePage={activePage} onPageClick={changePage} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

Pagination.propTypes = {};

export default Pagination;
