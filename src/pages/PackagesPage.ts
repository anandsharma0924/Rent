import { renderPackagesSection } from '../components/PackagesSection';

export const renderPackagesPage = (): string => {
  return `
    <div class="page-packages animate-fade-in" style="padding: 20px 0 60px;">
      ${renderPackagesSection()}
    </div>
  `;
};
