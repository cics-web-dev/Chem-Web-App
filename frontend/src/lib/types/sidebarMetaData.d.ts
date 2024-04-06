/**
 * Represents the metadata of a question.
 */
export interface QuestionMetadata {
    /**
     * The unique identifier of the question.
     */
    id: string;

    /**
     * The name or title of the question.
     */
    name: string;

    /**
     * Indicates whether the question is completed or not.
     */
    isCompleted: boolean;

    /**
     * Indicates whether the question is bookmarked or not.
     */
    isBookmarked: boolean;
}

/**
 * Represents the metadata for a sidebar item.
 */
export interface SidebarMetadata {
    /**
     * The name of the chapter.
     */
    chapter: string;

    /**
     * The list of question metadata in the chapter.
     */
    questions: QuestionMetadata[];
}
