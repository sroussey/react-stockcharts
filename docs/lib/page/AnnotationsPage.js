import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithAnnotation } from 'lib/charts/CandleStickChartWithAnnotation';

class AnnotationsPage extends React.Component {
  render() {
    return (
      <ContentSection title={AnnotationsPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser ref='container'>
              {(type) => (
                <CandleStickChartWithAnnotation
                  data={this.props.someData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/ANNOTATIONS'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

AnnotationsPage.title = 'Annotations';

export { AnnotationsPage };
