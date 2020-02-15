import React, { useEffect, useState } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageContentBody,
  EuiSpacer,
  EuiLoadingSpinner,
  EuiPagination,
  EuiFlexGroup,
  EuiFlexItem
} from '@elastic/eui';
import Pagination from './Pagination';
import { getPostsFromServer } from '../api/api';

const Layouts = props => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      setPosts(await getPostsFromServer());
      setIsLoading(false);
    }
    getPosts();
  }, []);

  if (isLoading) {
    return (
      <EuiPage style={{ height: '100vh' }}>
        <EuiPageBody style={{ justifyContent: 'center', alignItems: 'center' }}>
          <EuiLoadingSpinner size="xl" />
        </EuiPageBody>
      </EuiPage>
    );
  } else if (!posts) {
    return <EuiPage>No blog posts available</EuiPage>;
  } else {
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <EuiTitle size="l">
                <h1>Game Review Blog Posts</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
          </EuiPageHeader>
          {posts.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <EuiPageContent>
                  <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                      <EuiTitle>
                        <h2>{post.title}</h2>
                      </EuiTitle>
                    </EuiPageContentHeaderSection>
                    <EuiPageContentHeaderSection>Post #{post.id}</EuiPageContentHeaderSection>
                  </EuiPageContentHeader>
                  <EuiPageContentBody>{post.author}</EuiPageContentBody>
                  <EuiPageContentBody>{post.article}</EuiPageContentBody>
                </EuiPageContent>
                <EuiSpacer />
              </React.Fragment>
            );
          })}
          <Pagination />
        </EuiPageBody>
      </EuiPage>
    );
  }
};

export default Layouts;
