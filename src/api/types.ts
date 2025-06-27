
export interface IJournalEntry {
  id?: string;
  entryDate: string;
  journalContent: string;
  journalText?: string;
  timestamp: number;
}

export interface IInsightsDay {
  title: string;
  insightsContent : string;
  date: string;
}


export interface IPerson {
  id: string;
  name: string;
  relationship?: string;
}

export interface IRelationships {
  journalEntryId?: string;
  people: IPerson[];

}