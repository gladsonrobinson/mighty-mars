import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {_.map(this.props.pageContext.frontmatter.sections, (section, section_idx) => {
                let SectionComponent = components[section.component];
                return (
                  <SectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
        );
    }
}
