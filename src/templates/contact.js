import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';
import ContactForm from '../components/ContactForm';

export default class Contact extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <article className="post page post-full">
                  <header className="post-header inner-small">
                    <h1 className="post-title line-top">{this.props.pageContext.frontmatter.title}</h1>
                    {this.props.pageContext.frontmatter.subtitle && 
                    <div className="post-subtitle">
                      {htmlToReact(this.props.pageContext.frontmatter.subtitle)}
                    </div>
                    }
                  </header>
                  {this.props.pageContext.frontmatter.img_path && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(this.props.pageContext.frontmatter.img_path)} alt={this.props.pageContext.frontmatter.title} />
                  </div>
                  }
                  <div className="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    <ContactForm {...this.props} />
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
