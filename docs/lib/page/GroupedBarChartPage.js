import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { GroupedBarChart } from 'lib/charts/GroupedBarChart';

class GroupedBarChartPage extends React.Component {
  render() {
    return (
      <ContentSection title={GroupedBarChartPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser ref='container'>
              {(type) => (
                <GroupedBarChart data={this.props.groupedBarData} type={type} />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/GROUPED-BAR-CHART'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

GroupedBarChartPage.title = 'Grouped Bar Chart';

export { GroupedBarChartPage };
