import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { LineAndScatterChart } from 'lib/charts/LineAndScatterChart';

class LineAndScatterChartPage extends React.Component {
  render() {
    return (
      <ContentSection title={LineAndScatterChartPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <LineAndScatterChart
                  data={this.props.compareData}
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
                __html: require('md/SCATTER-CHART'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

LineAndScatterChartPage.title = 'Line & Scatter';

export { LineAndScatterChartPage };
