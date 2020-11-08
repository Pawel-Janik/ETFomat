export declare module api {

    export interface Id {
        $t: string;
    }

    export interface Updated {
        $t: Date;
    }

    export interface Category {
        scheme: string;
        term: string;
    }

    export interface Title {
        type: string;
        $t: string;
    }

    export interface Link {
        rel: string;
        type: string;
        href: string;
    }

    export interface Name {
        $t: string;
    }

    export interface Email {
        $t: string;
    }

    export interface Author {
        name: Name;
        email: Email;
    }

    export interface OpenSearchTotalResults {
        $t: string;
    }

    export interface OpenSearchStartIndex {
        $t: string;
    }

    export interface GsRowCount {
        $t: string;
    }

    export interface GsColCount {
        $t: string;
    }

    export interface Id2 {
        $t: string;
    }

    export interface Updated2 {
        $t: Date;
    }

    export interface Category2 {
        scheme: string;
        term: string;
    }

    export interface Title2 {
        type: string;
        $t: string;
    }

    export interface Content {
        type: string;
        $t: string;
    }

    export interface Link2 {
        rel: string;
        type: string;
        href: string;
    }

    export interface GsCell {
        row: number;
        col: number;
        inputValue: string;
        $t: string;
        numericValue: string;
    }

    export interface Entry {
        id: Id2;
        updated: Updated2;
        category: Category2[];
        title: Title2;
        content: Content;
        link: Link2[];
        gs$cell: GsCell;
    }

    export interface Feed {
        xmlns: string;
        xmlns$openSearch: string;
        xmlns$batch: string;
        xmlns$gs: string;
        id: Id;
        updated: Updated;
        category: Category[];
        title: Title;
        link: Link[];
        author: Author[];
        openSearch$totalResults: OpenSearchTotalResults;
        openSearch$startIndex: OpenSearchStartIndex;
        gs$rowCount: GsRowCount;
        gs$colCount: GsColCount;
        entry: Entry[];
    }

    export interface RootObject {
        version: string;
        encoding: string;
        feed: Feed;
    }
}

