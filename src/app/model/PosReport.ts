export class PosReport{
    public TotallyOwned: number = 0;
    public Completed: number = 0;
    public Revoked: number = 0;
    public NES: number = 0;
    public RecentlyBought: ReportGame[] = [];
    public RecentlyCompleted: ReportGame[] = [];
    public PlatformSummary: ReportItem[] = [];
    public GenreSummary: ReportItem[] = [];
    public ShopSummary: ReportItem[] = [];
}

export class ReportGame {
    public Name: string = '';
    public Genre: string = '';
    public Platform: string = '';
    public Shop: string = '';
    public ImageUrl: string = '';
    public BoughtOn: Date = new Date();
    public CompletedOn: Date = new Date();
}

export class ReportItem {
    public Name: string = '';
    public Count: number = 0;
}