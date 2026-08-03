import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.html',
  styleUrl: './tag-selector.scss',
})
export class TagSelector {
  readonly tags = signal<string[]>(['angular', 'nestjs', 'rxjs']);
  private readonly selectedTag = signal(this.tags()[0]);
  readonly activeTag = linkedSignal<string, string>({
    source: () => this.selectedTag(),
    computation: (tag) => tag,
    set: (value: string) => {
      const current = this.tags();

      if (!current.includes(value)) {
        this.tags.update((t) => [...t, value]);
      }
      this.selectedTag.set(value);
    },
  });

  selectTag(tag: string) {
    this.activeTag.set(tag);
  }

  onAddTag(event: SubmitEvent) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector('input');
    const value = input?.value.trim();
    if (value) {
      this.selectTag(value);
      input ? (input.value = '') : null;
    }
  }
}
