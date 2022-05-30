import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { HeikinAshi } from 'lib/charts/HeikinAshi';

class HeikinAshiPage extends React.Component {
  render() {
    return (
      <ContentSection title={HeikinAshiPage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/HEIKIN-ASHI'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => <HeikinAshi data={this.props.someData} type={type} />}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

HeikinAshiPage.title = 'Heikin Ashi';

export { HeikinAshiPage };
