"use client";

import Advocates from "./components/Advocates"
import Header from "./components/Header"
import SearchForm from "./components/SearchForm"
import AdvocateContextProvider from './store/advocates-context.jsx';

export default function Home() {
  return (
    <AdvocateContextProvider>
      <main>
        <Header />
        <SearchForm />
        <Advocates />
      </main>
    </AdvocateContextProvider>
  );
}
