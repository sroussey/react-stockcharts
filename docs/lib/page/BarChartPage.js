import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { BarChart } from 'lib/charts/BarChart';

class BarChartPage extends React.Component {
  render() {
    return (
      <ContentSection title={BarChartPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser ref='container'>
              {(type) => <BarChart data={this.props.barData} type={type} />}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/BAR-CHART'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

BarChartPage.title = 'Bar Chart';

export { BarChartPage };
