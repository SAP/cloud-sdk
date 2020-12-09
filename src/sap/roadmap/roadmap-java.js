import moment from 'moment';
import randomColor from 'randomcolor';

const style = {
  fontSize: '0.9rem'
};

const styleFocus = {
  fontSize: '0.9rem',
  background: 'indigo'
};

export const keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end',
  groupLabelKey: 'title'
};

export const groups = [
  { id: 'odata', title: 'OData v2/4 Type-Safe Client' },
  { id: 'saas', title: 'SDK as a Service' },
  { id: 'libs', title: 'SAP Ecosystem' },
  { id: 'rest', title: 'Open API Type-Safe Client' },
  { id: 'oss', title: 'Open Source SDK for Java' },
  { id: 'infra', title: 'K8s, Azure, AWS, GCP and beyond' },
  { id: 's4', title: 'SAP S/4HANA API Libraries' },
  { id: 'lobs', title: 'LoB Solutions' },
  { id: 'docs', title: 'SDK Documentation' },
  //  { id: 'support', title: 'Analyze and Scale Support' },
  { id: 'cap', title: 'One SAP' },
  { id: 'top', title: 'Developer Happiness' },
  { id: 'future', title: 'Future Shots' },
  { id: 'scp', title: 'SAP Cloud Platform' }
];

export const items = [
  {
    id: 1,
    group: 'odata',
    title: 'Reach Feature Parity Between OData v2/4 Type-Safe Clients',
    start: moment().year(2020).month('Jan').date(1),
    end: moment().year(2020).month('Mar').date(32),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 2,
    group: 'odata',
    title: 'Release Advanced OData v4 Features',
    start: moment().year(2020).month('Jan').date(1),
    end: moment().year(2020).month('Aug').date(32),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 3,
    group: 'odata',
    title: 'Release Unified Programming Model for OData v2/4.',
    start: moment().year(2020).month('Apr').date(1),
    end: moment().year(2020).month('Sep').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 4,
    group: 'rest',
    title: 'Release Type-Safe Client for SCP Workflow Service ',
    start: moment().year(2020).month('Apr').date(1),
    end: moment().year(2020).month('Jun').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 5,
    group: 'rest',
    title: 'Release Open API Type-Safe Client Generator',
    start: moment().year(2021).month('Jan').date(0),
    end: moment().year(2021).month('Mar').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 6,
    group: 'libs',
    title:
      'Pre-Generated Clients for SAP Graph, Kernel Services, Job Scheduler, etc.',
    start: moment().year(2020).month('Oct').date(1),
    end: moment().year(2020).month('Dec').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 7,
    group: 'docs',
    title: 'Release ScalableDocs and Cover Key Features',
    start: moment().year(2020).month('Apr').date(1),
    end: moment().year(2020).month('Jun').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 8,
    group: 'docs',
    title: 'Build Analytics and Feedback System for Documentation',
    start: moment().year(2020).month('Apr').date(1),
    end: moment().year(2020).month('Sep').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 9,
    group: 'docs',
    title: 'Reach 90% of Coverage for Docs. Raise Quality.',
    start: moment().year(2020).month('Jul').date(1),
    end: moment().year(2020).month('Dec').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 10,
    group: 'future',
    title: 'PoC: Spring WebFlux - Web on Reactive Stack',
    start: moment().year(2020).month('Sep').date(1),
    end: moment().year(2020).month('Dec').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 11,
    group: 'oss',
    title: 'Get Approval to Open Source SAP Cloud SDK for Java',
    start: moment().year(2020).month('Nov').date(1),
    end: moment().year(2020).month('Dec').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 12,
    group: 'oss',
    title: 'Release Open Source Version of SAP Cloud SDK for Java',
    start: moment().year(2021).month('Jan').date(1),
    end: moment().year(2021).month('Mar').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  // {
  //   id: 13,
  //   group: 'oss',
  //   title: 'Achieve a Split Between Open Source and Closed Source Parts of the SDK',
  //   start: moment().year(2021).month('Jan').date(1),
  //   end: moment().year(2021).month('Mar').date(31),
  //   itemProps: {
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double!') },
  //     style: {
  //       ...style

  //     }
  //   }
  // },
  {
    id: 14,
    group: 'infra',
    title: 'Native Support for K8s in Java',
    start: moment().year(2021).month('Jan').date(1),
    end: moment().year(2021).month('Feb').date(29),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  // {
  //   id: 29,
  //   group: 'infra',
  //   title: 'Improved support for other run times. Example Apps.',
  //   start: moment().year(2021).month('Jan').date(1),
  //   end: moment().year(2021).month('Mar').date(31),
  //   itemProps: {
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double!') },
  //     style: {
  //       ...style
  //     }
  //   }
  // },
  {
    id: 15,
    group: 's4',
    title: 'SAP S/4HANA Cloud 2008 VDM (incl v4 services)',
    start: moment().year(2020).month('Aug').date(1),
    end: moment().year(2020).month('Aug').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 16,
    group: 's4',
    title: 'VDM for SAP S/4HANA On-Premise',
    start: moment().year(2020).month('Aug').date(20),
    end: moment().year(2020).month('Sep').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 17,
    group: 's4',
    title: 'Type-Safe Client for SAP S/4HANA Enterprise Messaging',
    start: moment().year(2021).month('Jan').date(0),
    end: moment().year(2021).month('Mar').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 18,
    group: 'scp',
    title: 'Keep up With Change Rate of SCP Development',
    start: moment().year(2020).month('Jul').date(0),
    end: moment().year(2020).month('Dec').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  // {
  //   id: 19,
  //   group: 'saas',
  //   title: 'Automate Release for Existing Libraries via Pipeline',
  //   start: moment().year(2020).month('Oct').date(1),
  //   end: moment().year(2020).month('Dec').date(31),
  //   itemProps: {
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double!') },
  //     style: {
  //       ...styleFocus

  //     }
  //   }
  // },
  {
    id: 20,
    group: 'infra',
    title:
      'Improve Service Discovery and Connectivity to Enable New Runtimes and REST Client Capabilities',
    start: moment().year(2020).month('Oct').date(1),
    end: moment().year(2020).month('Dec').date(32),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 21,
    group: 'odata',
    title: 'Ongoing Support and Refinement for OData v2/4',
    start: moment().year(2020).month('Oct').date(1),
    end: moment().year(2020).month('Dec').date(32),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 22,
    group: 'libs',
    title: 'Currency Conversion Contribution',
    start: moment().year(2020).month('Feb').date(1),
    end: moment().year(2020).month('Sep').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 23,
    group: 'libs',
    title: 'Blockchain Library Contribution',
    start: moment().year(2020).month('Apr').date(1),
    end: moment().year(2020).month('June').date(32),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  // {
  //   id: 24,
  //   group: 'support',
  //   title: 'Introduce Support Metrics',
  //   start: moment().year(2020).month('Aug').date(1),
  //   end: moment().year(2020).month('Sep').date(32),
  //   itemProps: {
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double!') },
  //     style: {
  //       ...style,

  //     }
  //   }
  // },
  {
    id: 25,
    group: 'cap',
    title: 'Regular Alignment Between CAP and SAP to Achieve Synergies',
    start: moment().year(2020).month('Mar').date(1),
    end: moment().year(2020).month('Dec').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...styleFocus
      }
    }
  },
  {
    id: 26,
    group: 'libs',
    title: 'Logging With SAP Passport for Performance Monitoring',
    start: moment().year(2020).month('Jul').date(1),
    end: moment().year(2020).month('Aug').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  },
  {
    id: 27,
    group: 'top',
    title: 'Improve Logging and Debugging Capabilities',
    start: moment().year(2020).month('Sep').date(1),
    end: moment().year(2021).month('Mar').date(31),
    itemProps: {
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      style: {
        ...style
      }
    }
  }
  // {
  //   id: 28,
  //   group: 'top',
  //   title: 'Introduce Quality Measurement for SAP Cloud SDK Deliveries (regressions, bugs, stability, support load)',
  //   start: moment().year(2020).month('Sep').date(1),
  //   end: moment().year(2021).month('Mar').date(31),
  //   itemProps: {
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double!') },
  //     style: {
  //       ...style,

  //     }
  //   }
  // }
];
