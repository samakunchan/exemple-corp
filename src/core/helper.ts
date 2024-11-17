export class RouteName {
    static prefix = import.meta.env.VITE_PAGE_NAME === 'gh-pages' ? 'exemple-corp' : '';
}
