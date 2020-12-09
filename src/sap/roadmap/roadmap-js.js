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
  { id: 'advanced', title: 'Advanced Value-Add Features' },
  { id: 'rest', title: 'Open API Type-Safe Client' },
  { id: 'libs', title: 'SAP Ecosystem' },
  { id: 's4', title: 'SAP S/4HANA API Libraries' },
  { id: 'lobs', title: 'LoB Solutions' },
  { id: 'infra', title: 'K8s, Azure, AWS, GCP and Beyond' },
  { id: 'docs', title: 'SAP Cloud SDK Documentation' },
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
    start: moment().year(2020).month('Mar').date(1),
    end: moment().year(2020).month('Jul').date(32),
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
    start: moment().year(2020).month('Jul').date(1),
    end: moment().year(2020).month('Sep').date(32),
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
    start: moment().year(2020).month('Oct').date(0),
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
    id: 6,
    group: 'libs',
    title: 'Pre-Generated Clients for SCP Workflow Service.',
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
    group: 'libs',
    title:
      'Pre-Generated Clients for Graph, Kernel Service, Job Scheduler, etc.',
    start: moment().year(2020).month('Oct').date(1),
    end: moment().year(2021).month('Dec').date(31),
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
    title: 'Release Scalable Docs and Cover Key Features',
    start: moment().year(2020).month('Apr').date(1),
    end: moment().year(2020).month('Jul').date(31),
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
    title: 'Reach 70% of Coverage for Docs. Raise Quality.',
    start: moment().year(2020).month('Jul').date(1),
    end: moment().year(2020).month('Oct').date(31),
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
  //   id: 10,
  //   group: 'odata',
  //   title: 'Build Reference CAP Application to Test OData v2/4',
  //   start: moment().year(2020).month('June').date(1),
  //   end: moment().year(2020).month('Dec').date(31),
  //   itemProps: {
  //     'aria-hidden': true,
  //     onDoubleClick: () => { console.log('You clicked double!') },
  //     style: {
  //       ...style

  //     }
  //   }
  // },
  // {
  //   id: 14,
  //   group: 'infra',
  //   title: 'Native Support for K8s in Java',
  //   start: moment().year(2020).month('Sap').date(1),
  //   end: moment().year(2020).month('Nov').date(31),
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
    title: 'Generate OData v4 Libraries for SAP S/4HANA 2008 Release',
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
    title: 'Type-Safe Client for SAP S/4HANA On-Premise',
    start: moment().year(2020).month('Aug').date(20),
    end: moment().year(2020).month('Oct').date(31),
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
    start: moment().year(2020).month('Jul').date(20),
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
  //   start: moment().year(2021).month('Jan').date(0),
  //   end: moment().year(2021).month('Mar').date(31),
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
    start: moment().year(2021).month('Feb').date(31),
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
  {
    id: 21,
    group: 'odata',
    title: 'Ongoing Support and Refinement for OData v2/4',
    start: moment().year(2020).month('Sep').date(1),
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
        ...style
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
  },
  {
    id: 29,
    group: 'advanced',
    title: 'Caching & Resilience w/ Multitenancy',
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
  }
];
