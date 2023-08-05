import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    tools: {
        path: '/tools',
        title: 'tools'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    name: 'kmsec',
    title: 'kmsec',
    description: 'kmsec: (mainly) a security blog',
    url: 'https://kmsec.uk',
    githubUrl: 'https://github.com/kmsec-uk',
    listDrafts: true
}

export const PAGE_SIZE = 8
