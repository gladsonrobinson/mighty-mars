import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

export default class Portfolio extends React.Component {
    render() {
        let display_projects = _.orderBy(getPages(this.props.pageContext.pages, '/projects'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <header className="page-header inner-small">
                  <h1 className="page-title line-top">{this.props.pageContext.frontmatter.title}</h1>
                  {this.props.pageContext.frontmatter.subtitle && 
                  <p className="page-subtitle">{this.props.pageContext.frontmatter.subtitle}</p>
                  }
                </header>
                <div className={'portfolio-feed layout-' + this.props.pageContext.frontmatter.layout_style}>
                  {_.map(display_projects, (post, post_idx) => (
                  <article key={post_idx} className="post project">
                    <Link to={safePrefix(_.get(post, 'url'))} className="post-link">
                      {post.frontmatter.thumb_img_path && 
                      <div className="post-thumbnail">
                        <img className="thumbnail" src={safePrefix(post.frontmatter.thumb_img_path)} alt={post.frontmatter.title} />
                      </div>
                      }
                      <header className="post-header">
                        <h2 className="post-title">{post.frontmatter.title}</h2>
                      </header>
                    </Link>
                  </article>
                  ))}
                </div>
              </div>
            </div>
            </Layout>
        );
    }
}
