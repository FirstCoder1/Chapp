import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chats',
        children: [
          {
            path: '',
            loadChildren: './chats/chats.module#ChatsPageModule',
          },
        ],
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: './contacts/contacts.module#ContactsPageModule',
          },
        ],
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: './tab3/tab3.module#Tab3PageModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/tabs/chats',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/chats',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
