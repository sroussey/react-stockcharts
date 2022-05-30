import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { Renko } from 'lib/charts/Renko';

class RenkoPage extends React.Component {
  render() {
    return (
      <ContentSection title={RenkoPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{ __html: require('md/RENKO') }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => <Renko data={this.props.lotsOfData} type={type} />}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

RenkoPage.title = 'Renko';

export { RenkoPage };
