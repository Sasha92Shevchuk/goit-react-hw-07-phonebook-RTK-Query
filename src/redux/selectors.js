// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// не потрібно вже, бо є const { data, error, isLoading } = useGetContactsQuery();
// export const selectFilterContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, query) => {
//     console.log(selectContacts);
//     console.log(selectFilter);
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(query)
//     );
//   }
// );
