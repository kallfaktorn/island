module HomeHelper

	def custom_assets(source, ext)
	  path = File.join(Rails.root, 'public', source) + ext
	  asset_id = File.exist?(path) ? File.mtime(path).to_i.to_s : ''
	  "#{source}?#{asset_id}"
	end
	
end
